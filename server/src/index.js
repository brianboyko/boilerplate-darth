'use strict';
import app from './app';

const PORT = process.env.port || 9000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
