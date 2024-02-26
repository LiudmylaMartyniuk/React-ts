import React, {FC} from 'react';

import {ICar} from "../interfaces/carInterface";
import {Car} from "./Car";
import {ISetState} from "../types/setStateType";

interface IProps {
    cars: ICar[],
    setCarForUpdate: ISetState<ICar>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};