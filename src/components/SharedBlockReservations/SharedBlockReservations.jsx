import { InfoIcon } from "icons/Info";


const SharedBlockReservations = () => {
    return (
        <div className="max-width: 1392px mx-auto py-12 px-6 bg-iframe_bg_color">
            <h2>Забронюйте столик онлайн</h2>
            <p>Забудьте про довгі черги та незручні дзвінки.</p>
            <p>Наш онлайн-сервіс дозволить вам здійснити бронювання в будь-який час доби, навіть коли ресторан закритий.</p>
            <p>Звісно, ви можете забронювати столик як гість, але щоб мати можливість відстежувати свої бронювання столиків та користуватися всіма перевагами нашого сервісу, будь ласка, увійдіть в свій особистий аккаунт або зареєструйтесь.</p>
            <button type="button">Реєстрація</button>
            <button type="button">Вхід</button>
            <span> <InfoIcon /> Інформація для рестораторів</span>
        </div>
    )
};

export default SharedBlockReservations;