import css from "../FriendsList/FriendsList.module.css";



export const FriendListItem = ({ isOnline, name, id, avatar }) => {
    return (<li className={css.item} key={id}>
            <span className={css.status}>{ isOnline}</span>
            <img className={css.avatar} src={avatar} alt={name}  width="48" />
            <p className={css.name}>{name}</p>
        </li>)
    
}

