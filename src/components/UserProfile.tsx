import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { User } from '../api/types'
import { getUser } from '../api/user'
import Field from '../private/Field'
import { useEffect } from 'react'

const UserProfile = () => {
    const [author, setAuthor] = useState<User | null>(null)

    let { id } = useParams() // get the id from url

    // async function _getUser(id : number) {
    //     const data = await getUser(id)
    //     return data
    // }

    // useEffect(() => {
    //     _getUser();
    // }, []);

    return (
        author && (
            <div className="user-profile-wrapper">
                <Field label="Name">
                    <span>{author.name}</span>
                </Field>
                <Field label="Email">
                    <span>{author.email}</span>
                </Field>
                <Field label="Company">
                    <span>{author.company.name}</span>
                </Field>
                <Field label="Phone">
                    <span>{author.phone}</span>
                </Field>
                <Field label="Address">
                    <span>{author.address.street} - </span>
                    <span>{author.address.city} - </span>
                    <span>{author.address.zipcode}</span>
                </Field>
            </div>
        )
    )
}

export default UserProfile
