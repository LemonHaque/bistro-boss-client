/**
 * ----------
 *    BASIC
 * ----------
 * 
 * 1. Do not show the link them who should not see it
 * Only show to the person/types of user who should see it
 * 2. Do not allow to visit the link by typing the URL.
 * use AdminRoute that will check whether the user is admin or not
 * if not then redirect to any other page.you could logout user and send them to the login page
 * 
 * 
 * --------------
 * TO SEND DATA
 * ------------------
 * 1. verify jwt token(send authorization token in the header to the server)
 * 2. if it is an admin activity. Make sure only admin user is posting data by using verifyAdmin
 * 
 */