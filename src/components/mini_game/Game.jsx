import { useState, useEffect, useCallback } from "react";
import './index.css';
import ProgressBar from "./ProgressBar";

export default function Game() {
    const [sequence, setSequence] = useState([]);
    const [isGameOver, setIsGameOver] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    const generateSequence = useCallback(() => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
        const newSequence = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * letters.length)]);
        setSequence(newSequence);
        setCurrentIndex(0);
        setIsGameOver(false);
        setTimeLeft(4);
    }, []);

    const handleKeyPress = useCallback((e) => {
        if (isGameOver) return;

        const keyPress = e.key.toUpperCase();
        console.log(sequence);

        if (keyPress === sequence[currentIndex]) {
            console.log('press');
            setCurrentIndex((prevIndex) => prevIndex + 1);
            if (currentIndex + 1 === sequence.length) {
                setIsGameOver(true);
                console.log('Parabéns! Você completou a sequência!');
            }
        } else {
            setIsGameOver(true);
            console.log('errou');
        }
    }, [currentIndex, isGameOver, sequence]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        generateSequence();
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    setIsGameOver(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, [generateSequence]);

    return (
        <div className='cont'>
            <h2>DIGITE!</h2>
            <p>Pressione as teclas corretamente</p>
            {sequence.map((letter, index) => (
                <span className='letras' key={index} style={{ 
                    backgroundColor: index === currentIndex && 'white', 

                    backgroundColor: index === currentIndex || currentIndex > index && 'orange' , 
                    color: index === currentIndex || currentIndex > index && 'black' }}>
                    {letter}
                </span>
            ))}
            <ProgressBar timeLeft={timeLeft} totalTime={4} />
            {isGameOver && <>
                <button onClick={generateSequence}>Tentar novamente</button>
            </>}
        </div>
    );
}