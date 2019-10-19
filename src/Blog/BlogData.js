const shortid = require('shortid');

const data = [
    {
        blogId: shortid.generate(),
        blogTitle: 'A coding lesson I learned today',
        blogDesc: `
        <p>While using github pages for hosting your application, in case you need to route, you might run into a problem of routes working in local but not when hosted in gh pages.<br><br>I am using <strong>reach-router</strong> in my project. Through research, I found out that this is because path = '/' would resolve differently in development environment and deployed environment.
        In case if we use CRA (Create React App) for building our projects, we have process.env.PUBLIC_URL exposed to us which is undefined in development environment and equals to <i>homepage</i> property in package.json file.
        But if not CRA, then a hack is required to figure out whether you are in dev/prod mode.
        </p>
        `,
        code:`
        let url = process.env.PUBLIC_URL || '';

        // No need for this below if condition in CRA app
        if (window.location.pathname.includes('profile')) {
            url = '/profile'
        }

        return (
            <div className="headerContainer">
                <Link to={url + '/'} className="aboutLink">
                    <div>About Me</div>
                </Link>
                <Link to={url + '/blogs'} className="blogsLink">
                    <div>My Blogs</div>
                </Link>
            </div>
            )

        //package.json - homepage attribute exposed in CRA app
        {
            "name": "profile",
            "homepage": "https://karthikah.github.io/profile/",
            ...
        }
        `,
        date: '2019-10-19'
    }
]

export default data;