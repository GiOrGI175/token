const { default: mongoose } = require('mongoose');

module.exports = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://Giorgi:Nozadze@cluster0.rof5i.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    );
    console.log('succes');
  } catch (error) {
    console.log(error);
  }
};
