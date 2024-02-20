import { useEffect, useRef, useState } from "react";
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product : Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({onChange, product, value = 0} : useProductArgs) => {

  const [counter, setCounter] = useState(value);

  const isControlled = useRef( !!onChange) /* !!onChange significa la negacion de false en onChange   */

  const increaseBy = (value: number) => {
    if (isControlled.current){
      return onChange!({count: value, product}) /* !onChange significa que estamos seguros que onChange no es undefined */
    }
    const newValue = Math.max(counter + value, 0)
    setCounter(newValue);

    onChange && onChange({count: newValue, product});
  };

  useEffect(() => {
    setCounter(value);
  }, [value]);

  return {
    counter,
    increaseBy
  }
};
