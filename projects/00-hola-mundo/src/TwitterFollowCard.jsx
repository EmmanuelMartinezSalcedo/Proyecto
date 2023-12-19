import { useState } from "react" //hooks

export function TwitterFollowCard ( { children, userName = 'unknown', initialIsFollowing} )
{
    // const addAt = (userName) => `@${userName}`

    // const imageSrc = 'https://unavatar.io/${userName}'
    // ` (alt Gr + })

    // const userName = `@${userName}`

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    console.log('[TwitterFollowCard] reder with userName]: ', userName)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    

    return (
        <article className = 'tw-followCard'>
            <header className = 'tw-followCard-header'>
                <img 
                    className = 'tw-followCard-avatar' 
                    alt = "El avatar de midudev" 
                    src = { `https://unavatar.io/${userName}` } /> 
                <div className = 'tw-followCard-info'>
                    {children}
                    <span className = 'tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className = {buttonClassName} onClick = {handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}