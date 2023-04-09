import { gql } from '@apollo/client';

export const GET_ME = gql`
    query getMe{
        user {
            _id
            username
            email
            password
            savedBooks
        }
    }
`;