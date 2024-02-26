import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../interfaces/carInterface";
import {carService} from "../services/carService";
import {ISetState} from "../types/setStateType";


interface IProps{
    changeTrigger: () => void,
    setCarForUpdate: ISetState<ICar>,
    carForUpdate: ICar
}
const CarForm: FC <IProps> = ({changeTrigger, carForUpdate, setCarForUpdate}) => {
    const {reset, handleSubmit, register, setValue} = useForm<ICar>()

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        changeTrigger()
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={''} {...register('price')}/>
            <input type="text" placeholder={''} {...register('brand')}/>
            <input type="text" placeholder={''} {...register('year')}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm};