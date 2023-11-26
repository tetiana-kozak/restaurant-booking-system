import { InfoIcon } from "icons/Info";

const SharedBlockRegisteredUser = () => {
    return (
        <div>
            <div className="w-552">
                <h2 className="font-sans text-h2 text-text-color mb-50">Вітаємо, User</h2>
                <p className="font-sans text-p mb-30">Забудьте про довгі черги та незручні дзвінки.</p>
                <p className="font-sans text-p mb-30">
                    Наш онлайн-сервіс дозволить вам здійснити бронювання в будь-який час доби, навіть коли ресторан закритий.
                </p>
                <p className="font-sans text-p mb-50">
                    Звісно, ви можете забронювати столик як гість, але щоб мати можливість відстежувати свої бронювання столиків та користуватися всіма перевагами нашого сервісу, будь ласка, увійдіть в свій особистий аккаунт або зареєструйтесь.
                </p>
            </div>
            <div className="w-552 flex items-center justify-center gap-40 mb-264">
                <button className="font-sans text-p leading-8  cursor-pointer bg-button-primary py-10 px-41 rounded-100" type="button">Особистий кабінет</button>
            </div>
            <div className="w-552 flex items-center flex-start gap-20">
                <InfoIcon />
                <p className="font-sans text-p"> Інформація для рестораторів</p>
            </div>
        </div>
    )
};

export default SharedBlockRegisteredUser;