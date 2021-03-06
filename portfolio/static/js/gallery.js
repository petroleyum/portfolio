import React from 'react';
import {Squiggle} from './images.js'

function GalleryCol({piece}){
    return(
        <div className="col-md-4" key={piece.id}>
            <div className="object-container" key={piece.id} style={{backgroundImage:'url(' + piece.style + ')'}}>
                <div className="text-container">
                    <div className="object-title">
                        {piece.title}
                    </div>
                    <div className="squiggle-container">
                        <Squiggle />
                    </div>
                </div>
                <div className="title-container">
                    <p className="work-title">{piece.work}</p>
                </div>
            </div>
        </div>
    )
}


function GalleryRow({ cols }){
    return(
        <div className="row">
            {cols.map((col, i) =>
                <GalleryCol piece={col} />
            )}
        </div>
    );
}

export function Gallery({ pieces }) {
    const itemsPerRow = 3;
    let rows = [];

    // Turn our list of items into a list of rows that each have a list of columns
    // so our data structure more accurately reflects our display structure
    for (let i=0; i < pieces.length; i += itemsPerRow){
        let cols = [];
        for(let j=0; j < itemsPerRow && i + j < pieces.length; j++ ){
            cols.push(pieces[i+j]);
        }
        rows.push(cols);
    }

  return (
    <div className="Gallery">
        {rows.map((row, i) =>
            <GalleryRow cols={row}/>
        )}
    </div>
  );
}
