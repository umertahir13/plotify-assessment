import app from './express';

const port  = 3000;

app.listen(port, () => {
    console.log('Express server started on port: ' + port);
 });