import { app } from './app';
import { onStart } from './onStart';

onStart();

app.listen(8080, () => console.log('Server running fine on port 8080'));
