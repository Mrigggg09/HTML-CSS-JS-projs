export let data = [
    {
        fullname : 'Mukesh Pathak',
        username : 'Mukesh',
        password : 'mukesh098',
        phno : 9123456789,
        email : 'mukesh@gmail.com',
        petname : 'Rocky',
        schoolname : 'loyola',
        favsportname : 'cricket'
    },
    {
        fullname : 'Hitesh Choudhary',
        username : 'Hitesh',
        password : 'hitesh@123',
        phno : 9999999999,
        email : 'hitesh@gmail.com',
        petname : 'Nolan',
        schoolname : 'Carmel',
        favsportname : 'hockey'
    },
    {
        fullname : 'Cookie Patra',
        username : 'Cookie',
        password : 'cooksCapt',
        phno : 9888888888,
        email : 'cookie@gmail.com',
        petname : 'Cook',
        schoolname : 'tarapore',
        favsportname : 'football'
    }
];

export let numberOfAccounts = 3;

export const addToData = (newObj)=>{
    data.push(newObj);
}

export const updateAccCount = ()=>{
    numberOfAccounts++;
}