package com.sport2;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen; // here



public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
        // return "MySplashScreen";
    return "Sport2";
  }
  @Override
protected void onCreate(Bundle savedInstanceState) {
  // super.onCreate(null); //for navigation
   SplashScreen.show(this);  // here
  super.onCreate(savedInstanceState);
}

}
