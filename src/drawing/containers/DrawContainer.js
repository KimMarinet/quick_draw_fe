import React, { useState, useCallback } from "react";
import Canvas from "../components/Canvas";
import Direction from "../components/Direction";
import Result from "../components/Result";
import { getRandomCategory } from "../global/categories";

const DrawConatainer = () => {
    const [categroy, setCategory] = useState(() => getRandomCategory());
    const [canvas, setCanvas] = useState();

    // 캔버스에 그리기 처리
    const drawCanvas = useCallback((el) => {
        const ctx = el.getContext('2d');
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        setCanvas(el);

        let isDraw = false;
        el.addEventListener("mousedown", (e) => {
            ctx.beginPath();
            ctx.moveTo(e.offsetX, e.offsetY)

            isDraw = true; // 선을 그릴 수 있는 상태로 변경
        });

        el.addEventListener("mousemove", (e) => {
            if(!isDraw) return;

            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        });

        el.addEventListener("mouseup", (e) => {
            isDraw = false; // 선을 그릴 수 없는 상태로 변경
        });

    }, []);

    const onConfirmDrawing = useCallback(() => {
        const base64 = canvas.toDataURL("image/jpeg").split('base64,')[1];

        const buffer = new ArrayBuffer(base64.length);
        const data = new Uint8Array(buffer);
        for (let i = 0; i < base64.length; i++){
            data[i] = base64.charCodeAt(i);
        }

        const image = new Blob([buffer], {type: 'image/jpeg'});

    }, [canvas]);

    return(
        <>
            <Direction category={categroy} />
            <Canvas callback={drawCanvas} />
            <Result Result={onConfirmDrawing}/>
        </>
    );
};

export default React.memo(DrawConatainer);