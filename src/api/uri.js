const uri = function() {
  return  window.location.hostname === 'localhost' ? 'http://localhost:5000': '/';
}()

export default uri;
