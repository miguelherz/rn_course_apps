import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer ZliIYDcdmfwYDR01Fv9OEqtwyxVZTuUtYCRP5Lff66fsIvetvFH5dfhWQTecs8Gv0BPYJkOonXtCXeixDLUVmhkiib5sxk7mxr9OoXckZlM9i8QNiZ49REZP3QatXXYx'
    }
});