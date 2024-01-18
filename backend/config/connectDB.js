const mongoose=require('mongoose')

const conectDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://nanamohamed:bcuRDOVnB4K8gWWv@cluster0.ebnvwo0.mongodb.net/?retryWrites=true&w=majority')
        console.log('Successfull')
    } catch (error) {
        console.log(error)
    }
}

module.exports=conectDB