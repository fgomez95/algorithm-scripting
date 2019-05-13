function diffArray(arrX:Array<any>, arrY:Array<any>):Array<any>{
			    return arrX.filter(el => !arrY.includes(el)).concat(arrY.filter(el => !arrX.includes(el)));
			    }

			    export default diffArray;
