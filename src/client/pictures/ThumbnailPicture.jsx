import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

export default function ThumbnailPicture(props) {

  const {item, index, onClick, className, updatePictureRate} = props;
  return (
    <div className={className}>
      <img src={item.url} key={item.id} alt={index} />
      <div className="thumbnail-info" onClick={onClick}>
        <span><p>Title: {item.title}</p></span>
        <span><p>Added: {item.date}</p></span>
        { className === 'thumbnail'
          ? <span><p>Rate: {item.rate}</p></span>
          : <span><p>Rate:</p>
              <FormGroup>
                <FormControl
                  componentClass="select"
                  defaultValue={item.rate}
                  onChange={(e) => updatePictureRate(index, e.target.value)}
                >
                  {
                    ['1','2','3','4','5'].map(i =>
                      <option value={i}>{i}</option>
                    )
                  }
                </FormControl>
            </FormGroup>
          </span>
        }
      </div>
    </div>
  )
}

