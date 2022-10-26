import { initializeApp } from 'firebase/app';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJ1v6crvQTmbwnZYJnRMn-1ugvXeY08-w',
  authDomain: 'authentech-6009f.firebaseapp.com',
  projectId: 'authentech-6009f',
  storageBucket: 'authentech-6009f.appspot.com',
  messagingSenderId: '42175602860',
  appId: '1:42175602860:web:f7e8c916ffb09452087f09',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
