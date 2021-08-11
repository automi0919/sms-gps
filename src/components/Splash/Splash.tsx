import './style.css'

const Splash = (props: any): any => {
    return (
        <div className="splash-wrapper">
            <header className="header">
                <ul className="header__list">
                    <li className="header__list--item header__list--item-1">
                        <img src="/assets/images/logo.png" alt="" className="splash-image"/>
                        <h2 className="title">safe locate</h2>
                        <label className="description">sms your gps</label>
                    </li>
                </ul>
            </header>
        </div>
    )
}
export default Splash;