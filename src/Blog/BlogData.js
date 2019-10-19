const shortid = require('shortid');

const data = [
    {
        blogId: shortid.generate(),
        blogTitle: 'My First Blog Ever',
        blogDesc: `I am little nervous as its my first ever blog. 
        Hence we will keep it simple. 
        I would like to share my thoughts and experiences in my day to day life here. 
        Hope it helps to lighten everyone's mood.`

    }, {
        blogId: shortid.generate(),
        blogTitle: 'My First Blog Ever',
        blogDesc: `I am little nervous as its my first ever blog. 
        Hence we will keep it simple. 
        I would like to share my thoughts and experiences in my day to day life here. 
        Hope it helps to lighten everyone's mood.`

    }
]

export default data;