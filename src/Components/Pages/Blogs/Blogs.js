import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container container  '>
            <h2 className='blogs-title'>Blogs</h2>
            <div className='blogs border border-success p-2 my-5'>
                <h2 className='text-center text-info'>Difference between authorization and authentication</h2>
                <p className='text-start text-muted fs-5 my-0'>Authentication comes before authorization. Authentication is the process of having knowledge of the identity of the user.This is the first step in any security process.</p>
                <p className='text-start text-muted fs-5'>Authorization is the process of giving access and restriction on different parts of the site to different users.</p>
            </div>
            <div className='blogs border border-success p-2'>
                <h2 className='text-center text-info'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='text-start text-muted fs-5 my-0'>We are using firebase to authenticate our sites users and to host our site.</p>
                <p className='text-start text-muted fs-5'>Other Authentication options that i have is- Auth0, MongoDB, Passport, Okta, JSON Web Token, Amazon Cognito, Keycloak.</p>
            </div>
            <div className='blogs border border-success p-2 my-5'>
                <h2 className='text-center text-info'>What other services does firebase provide other than authentication</h2>
                <p className='text-start text-muted fs-5 my-0'>Firebase provides many other services.They are - Analytics for Web, Cloud Firestore for web, Cloud Messaging for web, Performance Monitoring for Web, Remote Config for Web, Cloud Functions for Web, Cloud Storage for Web, Realtime Database for Web and App Check for Web</p>
                
            </div>
        </div>
    );
};

export default Blogs;