import { useRef, useState } from "react";

enum Operator {
   equal, subtract, multiply, divide
}
export const useCalculator = () => {

   const [number, setNumber] = useState('0');
   const [previousNumber, setPreviousNumber] = useState('0')

   const lastOperation = useRef<Operator>();

   const clean = () => {
      setNumber('0');
      setPreviousNumber('0');
   }

   const assembleNumber = (textNumber: string) => {
      // do not accept double points
      if (number.includes('.') && textNumber === '.') return;

      if (number.startsWith('0') || number.startsWith('-0')) {
         // decimal point 
         if (textNumber === '.') {
            setNumber(number + textNumber);
            // evaluate if it is other zero, and there is a point
         } else if (textNumber === '0' && number.includes('.')) {
            setNumber(number + textNumber);
            // evaluate if it is different from zero, and there is a point
         } else if (textNumber !== '0' && !number.includes('.')) {
            setNumber(textNumber);
            // avoid 0000.0
         } else if (textNumber === '0' && !number.includes('.')) {
            setNumber(number);
         } else {
            setNumber(number + textNumber);
         }
      } else {
         setNumber(number + textNumber);
      }
   }

   const positiveNegative = () => {
      if (number.includes('-')) {
         setNumber(number.replace('-', ''));
      } else {
         setNumber('-' + number);
      }
   }

   const buttonDelete = () => {
      if (number.length === 1) {
         if (number === '0') return;
         else setNumber('0');
      } else if (number.length === 2 && number.startsWith('-')) {
         setNumber('0');
      } else {
         setNumber(number.slice(0, -1))
      }
   }

   const changePreviousNumber = () => {
      if (number.endsWith('.')) {
         setPreviousNumber(number.slice(0, -1));
      } else {
         setPreviousNumber(number);
      }
      setNumber('0');
   }

   const buttonEqual = () => {
      changePreviousNumber();
      lastOperation.current = Operator.equal;
   }
   const buttonSubtract = () => {
      changePreviousNumber();
      lastOperation.current = Operator.subtract;
   }
   const buttonMultiply = () => {
      changePreviousNumber();
      lastOperation.current = Operator.multiply;
   }
   const buttonDivide = () => {
      changePreviousNumber();
      lastOperation.current = Operator.divide;
   }

   const calculate = () => {
      const numero_1 = Number(number);
      const numero_2 = Number(previousNumber);

      switch (lastOperation.current) {
         case Operator.equal:
            setNumber(`${numero_1 + numero_2}`)
            break;
         case Operator.subtract:
            setNumber(`${numero_2 - numero_1}`)
            break;
         case Operator.multiply:
            setNumber(`${numero_1 * numero_2}`)
            break;
         case Operator.divide:
            setNumber(`${numero_2 / numero_1}`)
            break;
      }
      setPreviousNumber('0');
   }

   return { number, previousNumber, clean, positiveNegative, buttonEqual, buttonSubtract, buttonDivide, buttonMultiply, buttonDelete, calculate, assembleNumber};
}
