import React, { Component } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete'; // getLatLng, // geocodeByAddress,
import ErrorBoundary from '../../Services/Error';
import {
  Float,
  PlaceContainer,
  PlaceInput,
  PlaceSearchContainer,
} from './PlaceElements';

class LocationSearchInput extends Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <PlacesAutocomplete
            value={this.props.value}
            onChange={this.props.onChange}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <PlaceContainer>
                <PlaceInput
                  {...getInputProps({
                    placeholder: 'Enter Your Location',
                  })}
                />
                <PlaceSearchContainer>
                  {loading && <Float>Loading...</Float>}

                  {suggestions.map((suggestion, i) => {
                    const style = suggestion.active
                      ? {
                          padding: '5px 0px',
                          backgroundColor: 'black',
                          cursor: 'pointer',
                        }
                      : {
                          padding: '5px 0px',
                          backgroundColor: '#010140',
                          cursor: 'pointer',
                        };
                    return (
                      <Float
                        key={(i)}
                        {...getSuggestionItemProps(suggestion, { style })}
                      >
                        <Float key={suggestion.placeId}>
                          {suggestion.description}
                        </Float>
                      </Float>
                    );
                  })}
                </PlaceSearchContainer>
              </PlaceContainer>
            )}
          </PlacesAutocomplete>
        </ErrorBoundary>
      </>
    );
  }
}

export default LocationSearchInput;
