// import user from "./user.json";
import PropTypes from "prop-types";
import css from './profile.module.css';

export default function Profile({
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  }) {
    return(
        // <>
        // <ProfileCard>
<div className={css.profile}>
  <div className={css.description}>
    <img
      src={avatar}
      alt="User avatar"
      width={100}
          height={100}
          className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}>{followers}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}>{views}</span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}>{likes}</span>
    </li>
  </ul>
</div>
/* </ProfileCard>
</>) */);

}

Profile.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stars: PropTypes.arrayOf(PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
  }))}