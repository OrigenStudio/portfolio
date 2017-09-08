import React from 'react';
import { renderToString } from 'react-dom/server';
import { JssProvider, SheetsRegistry } from 'react-jss';
import { create } from 'jss';
import preset from 'jss-preset-default';
import { MuiThemeProvider } from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

import theme from '../config/theme';

export default ({ bodyComponent, replaceBodyHTMLString, setHeadComponents }) => {
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Configure JSS
  const jss = create(preset());
  jss.options.createGenerateClassName = createGenerateClassName;

  // Render the component to a string.
  const html = renderToString(
    <JssProvider registry={sheetsRegistry} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        <bodyComponent />
      </MuiThemeProvider>
    </JssProvider>,
  );

  // Grab the CSS from our sheetsRegistry.
  const css = sheetsRegistry.toString();
  // QUESTION - Where this CSS should go?

  replaceBodyHTMLString(html);
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
  ]);
  console.log('Rendering in the server');
};
