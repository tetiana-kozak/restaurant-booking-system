import { InfoIcon } from "icons/Info";


const SharedBlockReservations = () => {
    return (
        <div className="w-1392 mx-auto pt-60 pb-70 px-50 bg-iframe_bg_color rounded-md">
            <div className="w-552">
                <h2 className="font-sans text-h2 text-text-color mb-50">Забронюйте столик онлайн</h2>
                <p className="font-sans text-p mb-30">Забудьте про довгі черги та незручні дзвінки.</p>
                <p className="font-sans text-p mb-30">
                    Наш онлайн-сервіс дозволить вам здійснити бронювання в будь-який час доби, навіть коли ресторан закритий.
                </p>
                <p className="font-sans text-p mb-50">
                    Звісно, ви можете забронювати столик як гість, але щоб мати можливість відстежувати свої бронювання столиків та користуватися всіма перевагами нашого сервісу, будь ласка, увійдіть в свій особистий аккаунт або зареєструйтесь.
                </p>
            </div>
            <div className="w-552 flex items-center justify-center gap-40 mb-264">
                <button className="py-10 px-41 font-sans text-p leading-8 text-[#FFB859] cursor-pointer" type="button">Реєстрація</button>
                <button className="font-sans text-p leading-8  cursor-pointer bg-button-primary " type="button">Вхід</button>
            </div>
            <div className="w-552 flex items-center flex-start gap-20">
                <InfoIcon />
                <p className="font-sans text-p"> Інформація для рестораторів</p>
            </div>
        </div>
    )
};

export default SharedBlockReservations;