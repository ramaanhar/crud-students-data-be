const express = require('express')
const cors = require('cors');
const logger = require('morgan');
const MahasiswaRoutes = require('./routes/mahasiswa.routes');

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello world')
})
app.use('/api/mahasiswa', MahasiswaRoutes);

app.use((req, res, next) => {
    next(createError(404));
});
  
  // error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
  
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
})
  