import React from 'react' 
import Link from 'gatsby-link'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


import ContactUsForm from '../components/ContactUsForm'
 
const ContactPage = () => 
        <Grid container>
            <Grid item xs={12} sm={6}>
                <Typography variant="display2" color="inherit">
                Need help on an existing project? Interested in what origen studio can do for you?
                </Typography>
                <Typography variant="display2" color="inherit">
                Get in touch at hello@origen.studio and let us know what do you need
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <ContactUsForm />
            </Grid>
        </Grid>
 
export default ContactPage 