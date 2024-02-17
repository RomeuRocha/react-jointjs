import React, { useEffect, useRef } from 'react';


import * as joint from '@joint/core'


const Diagram = () => {


    const canvas = useRef();

    useEffect(() => {
        let graph = new joint.dia.Graph();

        console.log(canvas.current)

        var paper = new joint.dia.Paper({
          el: canvas.current,
          model: graph,
          width: 1000,
          height: 600,
          gridSize: 1
      });
  
        var rect = new joint.shapes.standard.Rectangle({});
        rect.position(100, 30);
        rect.resize(100, 40);
        rect.attr({
            body: {
                fill: 'orange'
            },
            label: {
                text: 'Hello',
                fill: 'white'
            }
        });
        rect.addTo(graph);

        var rect2 = rect.clone();
        rect2.translate(300, 0);
        rect2.attr('label/text', 'World!');
        rect2.addTo(graph);

        var link = new joint.shapes.standard.Link();
        link.source(rect);
        link.target(rect2);
        link.addTo(graph);

    }, []);

    return (
        <div className="canvas" ref={canvas} />
    );
}

export default Diagram;