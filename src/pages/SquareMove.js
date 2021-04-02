import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function SquareMove() {
    const circleRadius = 30;
      _touchX = new Animated.Value(windowWidth / 2 - circleRadius);
      _touchY = new Animated.Value(windowWidth / 2 - circleRadius);
      _onPanGestureEvent = Animated.event([{ nativeEvent: { y: this._touchY, x: this._touchX} }], {
        useNativeDriver: true,
      });
        return (
          <PanGestureHandler onGestureEvent={this._onPanGestureEvent}>
            <Animated.View
              style={{
                height: 100,
                justifyContent: 'center',
                backgroundColor: 'red'
              }}>
              <Animated.View
                style={[
                  {
                    backgroundColor: '#42a5f5',
                    borderRadius: circleRadius,
                    height: circleRadius * 2,
                    width: circleRadius * 2,
                  },
                  {
                    transform: [
                        {
                            translateX: Animated.add(
                                this._touchX,
                                new Animated.Value(-circleRadius)
                              ),
                        },
                      {
                        translateY: Animated.add(
                          this._touchY,
                          new Animated.Value(-circleRadius)
                        ),
                      },

                    ],
                  },
                ]}
              />
            </Animated.View>
          </PanGestureHandler>
        );
      }