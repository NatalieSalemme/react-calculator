import React from 'react';

const ButtonsList = props => (
  <div className="buttonsList">

  <input type="button" id="all-clear" className="compute btn" value="AC" onClick={props.onClear}/>
  <input type="button" id="clear-sign" className="compute btn" value="C" />
  <input type="button" id="pos-or-neg" className="compute btn" value="+/-" />
  <input type="button" id="division-sign" className="compute btn" value="÷" />
  <input type="button" id="one" className="btn" value="1" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="two" className="btn" value="2" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="three" className="btn" value="3" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="multiplication-sign" className="compute btn" value="x" />
  <input type="button" id="four" className="btn" value="4" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="five" className="btn" value="5" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="six" className="btn" value="6" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="minus-sign" className="compute btn" value="-" />
  <input type="button" id="seven" className="btn" value="7" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="eight" className="btn" value="8" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="nine" className="btn" value="9" onClick={(e) => props.handleClick(e.target.value)} />
  <input type="button" id="plus-sign" className="compute btn" value="+" />
  <input type="button" id="zero" className="btn" value="0" onClick={(e) => props.handleClick(e.target.value)}  />
  <input type="button" id="decimal-sign" className="compute btn" value="." />
  <input type="button" id="equals-sign" className="btn" value="=" onClick={props.onEvaluate}/>
    </div>
);

export default ButtonsList;
