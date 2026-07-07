const express = require('express');
const path = require('path');

const userRouter = require('./routes/userRouter');
const { hostRouter } = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtils');
const errorController = require('./controller/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(express.urlencoded({ extended: false }));

app.use(userRouter);
app.use('/host', hostRouter);
app.use(express.static(path.join(rootDir, 'public')));

app.use(errorController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address http://localhost:${PORT}`);
});