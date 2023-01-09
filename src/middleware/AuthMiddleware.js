export default function auth({ next }) {
  console.log('AuthMiddleware Log');
  return next();
}
