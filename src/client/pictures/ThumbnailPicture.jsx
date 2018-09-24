import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default function ThumbnailPicture(props) {
  const {item, index, onClick, className, updatePictureRate} = props;
  return (
    <div className={className} onClick={onClick}>
      <img src={item.url} key={item.id} alt={index} />
      <div className="thumbnail-info">
        <span><p>Title: {item.title}</p></span>
        { className === 'thumbnail'
          ? <div>
            <span><p>Added: {item.date}</p></span>
            <span><p>Rate: {item.rate}</p></span>
          </div>
          : <div>
            <span><p>Added: {item.date}</p></span>
            <span><p>Rate:</p>
            <FormGroup>
              <FormControl
                componentClass="select"
                defaultValue={item.rate}
                onChange={(e) => updatePictureRate(index, e.target.value)}
              >
                {
                  ['1', '2', '3', '4', '5'].map(i => <option value={i}>{i}</option>)
                }
              </FormControl>
            </FormGroup>
          </span>
          </div>
        }
      </div>
    </div>
  );
}
