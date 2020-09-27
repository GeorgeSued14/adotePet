const {app, PORT} = require('./src/index');

app.listen(PORT, err => {
    if(err)
        throw err
    console.log(`Listening server in port ${PORT}`);
});