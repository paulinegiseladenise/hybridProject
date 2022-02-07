const HomeComponent ({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{ fontSize: 18, justifyContent: "center", alignItems: "center" }}
        >
          <View>
            <Animatable.Text
              animation="flash"
  
              iterationCount={infinite}
            >
              You can win an
              exclusive bag!
            </Animatable.Text>
          </View>
        </Text>
  
        <View style={styles.platformSpecific}>
          <Text
            style={{
              color: "black",
              fontSize: 16,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            {"\n"}You register with first and
            {"\n"}last name and can only
            {"\n"}register once on each item.
            {"\n"}
            {"\n"}Click on the button below to go to
            {"\n"}the register page.
            {"\n"}
            {"\n"}
          </Text>
  
          <View style={styles.buttons}>
            <Button
              color="#675b51"
              title="R e g i s t e r"
              onPress={() =>
                navigation.navigate("Register" /*{ id: 82, name: "Benny" }*/)
              }
            />
          </View>
        </View>
  
        <View style={styles.platformSpecific}>
          <Text
            style={{
              color: "black",
              fontSize: 16,
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            Click on the button below to see
            {"\n"}which bag you can win.
            {"\n"}
            {"\n"}
          </Text>
          <View style={styles.buttons}>
            <Button
              color="#675b51"
              title="B a g   o f   t h e   m o n t h"
              onPress={() => navigation.navigate("Item")}
            />
          </View>
        </View>
      </View>
    );
  }
