import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Ángel Durán',
        isFollwing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo H.',
        isFollwing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hernandez',
        isFollwing: true
    }
]
export function App() {
    // const fortmat = (userName) => `@${userName}`
    
    // const formattedUserName = <span>@midudev</span>

    //const midudev = { isFollowing: true, userName: 'midudev' }
    //const pheralb = { isFollowing: false, userName: 'pheralb'}

    // const [name, setName] = useState("midudev")

    // console.log('reder with name: ', name)

    return (
        <section className = 'App'>
            {
                users.map(({ userName, name, isFollwing}) => (
                        <TwitterFollowCard
                        key = {userName}
                        userName = {userName} 
                        initialIsFollowing = {isFollwing}>
                            {name}  
                        </TwitterFollowCard>
                    )
                )
            }
        </section>
    )
}