/**
 * @author vedantsagolale12
 * @description Comprehensive user input handling for different data types in Node.js
 * @version 1.0.0
 */

const prompt = require("prompt-sync")({ sigint: true });

/**
 * Utility functions for input validation and formatting
 */
class InputValidator {
  /**
   * Validates if input is not empty
   * @param {string} input - User input
   * @returns {boolean} - True if valid
   */
  static isNotEmpty(input) {
    return input && input.trim().length > 0;
  }

  /**
   * Validates if input is a valid number
   * @param {string} input - User input
   * @returns {boolean} - True if valid number
   */
  static isValidNumber(input) {
    return !isNaN(input) && input.trim() !== "";
  }

  /**
   * Validates if input is a valid date
   * @param {string} input - Date string
   * @returns {boolean} - True if valid date
   */
  static isValidDate(input) {
    const date = new Date(input);
    return date instanceof Date && !isNaN(date);
  }

  /**
   * Validates email format
   * @param {string} email - Email string
   * @returns {boolean} - True if valid email
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

/**
 * Safe input functions with validation and error handling
 */
class SafeInput {
  /**
   * Get validated string input
   * @param {string} message - Prompt message
   * @param {boolean} required - Whether input is required
   * @returns {string} - Validated string
   */
  static getString(message, required = true) {
    let input;
    do {
      input = prompt(message);
      if (!required && (input === null || input === "")) {
        return "";
      }
      if (!InputValidator.isNotEmpty(input)) {
        console.log("❌ Input cannot be empty. Please try again.");
      }
    } while (!InputValidator.isNotEmpty(input));
    return input.trim();
  }

  /**
   * Get validated number input
   * @param {string} message - Prompt message
   * @param {boolean} isInteger - Whether to parse as integer
   * @returns {number} - Validated number
   */
  static getNumber(message, isInteger = false) {
    let input;
    do {
      input = prompt(message);
      if (!InputValidator.isValidNumber(input)) {
        console.log("❌ Please enter a valid number.");
      }
    } while (!InputValidator.isValidNumber(input));
    return isInteger ? parseInt(input) : parseFloat(input);
  }

  /**
   * Get boolean input (yes/no)
   * @param {string} message - Prompt message
   * @returns {boolean} - Boolean value
   */
  static getBoolean(message) {
    let input;
    do {
      input = prompt(`${message} (yes/no): `).toLowerCase().trim();
      if (!["yes", "no", "y", "n"].includes(input)) {
        console.log("❌ Please enter 'yes' or 'no'.");
      }
    } while (!["yes", "no", "y", "n"].includes(input));
    return ["yes", "y"].includes(input);
  }

  /**
   * Get validated date input
   * @param {string} message - Prompt message
   * @returns {Date} - Valid date object
   */
  static getDate(message) {
    let input;
    do {
      input = prompt(`${message} (YYYY-MM-DD): `);
      if (!InputValidator.isValidDate(input)) {
        console.log("❌ Please enter a valid date in YYYY-MM-DD format.");
      }
    } while (!InputValidator.isValidDate(input));
    return new Date(input);
  }

  /**
   * Get array from comma-separated input
   * @param {string} message - Prompt message
   * @param {Function} converter - Optional converter function
   * @returns {Array} - Array of values
   */
  static getArray(message, converter = null) {
    const input = this.getString(message);
    let array = input
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);

    if (converter) {
      array = array.map(converter);
    }

    return array;
  }
}

/**
 * Primitive Data Types Handler
 */
class PrimitiveDataTypes {
  /**
   * Demonstrates string input handling
   */
  static handleStringInputs() {
    console.log("\n📝 STRING INPUTS");
    console.log("================");

    try {
      const name = SafeInput.getString("Enter your name: ");
      const message = SafeInput.getString("Enter a message: ", false);

      console.log(`✅ Hello ${name}!`);
      if (message) {
        console.log(`✅ Your message: "${message}"`);
      }

      return { name, message };
    } catch (error) {
      console.error("❌ Error handling string inputs:", error.message);
      return null;
    }
  }

  /**
   * Demonstrates number input handling
   */
  static handleNumberInputs() {
    console.log("\n🔢 NUMBER INPUTS");
    console.log("================");

    try {
      const age = SafeInput.getNumber("Enter your age: ", true);
      const price = SafeInput.getNumber("Enter a price: ");
      const quantity = SafeInput.getNumber("Enter quantity: ", true);

      console.log(`✅ Age: ${age} years`);
      console.log(`✅ Price: $${price.toFixed(2)}`);
      console.log(`✅ Quantity: ${quantity}`);
      console.log(`✅ Total: $${(price * quantity).toFixed(2)}`);

      return { age, price, quantity, total: price * quantity };
    } catch (error) {
      console.error("❌ Error handling number inputs:", error.message);
      return null;
    }
  }

  /**
   * Demonstrates boolean input handling
   */
  static handleBooleanInputs() {
    console.log("\n✅ BOOLEAN INPUTS");
    console.log("=================");

    try {
      const isActive = SafeInput.getBoolean("Are you active?");
      const wantsContinue = SafeInput.getBoolean("Do you want to continue?");

      console.log(`✅ Active status: ${isActive}`);
      console.log(`✅ Continue: ${wantsContinue}`);

      return { isActive, wantsContinue };
    } catch (error) {
      console.error("❌ Error handling boolean inputs:", error.message);
      return null;
    }
  }

  /**
   * Runs all primitive data type demonstrations
   */
  static run() {
    console.log("\n🎯 PRIMITIVE DATA TYPES DEMO");
    console.log("============================");

    const results = {
      strings: this.handleStringInputs(),
      numbers: this.handleNumberInputs(),
      booleans: this.handleBooleanInputs(),
    };

    return results;
  }
}

/**
 * Non-Primitive Data Types Handler
 */
class NonPrimitiveDataTypes {
  /**
   * Demonstrates array input handling
   */
  static handleArrayInputs() {
    console.log("\n📋 ARRAY INPUTS");
    console.log("===============");

    try {
      // String array
      const colors = SafeInput.getArray("Enter colors (comma separated): ");

      // Number array
      const count = SafeInput.getNumber("How many numbers to enter: ", true);
      const numbers = [];
      for (let i = 0; i < count; i++) {
        const num = SafeInput.getNumber(`Enter number ${i + 1}: `);
        numbers.push(num);
      }

      // Hobby array with trimming
      const hobbies = SafeInput.getArray("Enter hobbies (comma separated): ");

      console.log(`✅ Colors: [${colors.join(", ")}]`);
      console.log(`✅ Numbers: [${numbers.join(", ")}]`);
      console.log(`✅ Hobbies: [${hobbies.join(", ")}]`);

      return { colors, numbers, hobbies };
    } catch (error) {
      console.error("❌ Error handling array inputs:", error.message);
      return null;
    }
  }

  /**
   * Demonstrates object input handling
   */
  static handleObjectInputs() {
    console.log("\n🏗️ OBJECT INPUTS");
    console.log("================");

    try {
      // Simple object
      const person = {
        name: SafeInput.getString("Enter person name: "),
        age: SafeInput.getNumber("Enter person age: ", true),
        city: SafeInput.getString("Enter city: "),
      };

      // Complex nested object
      const user = {
        name: SafeInput.getString("Enter user name: "),
        email: this.getValidEmail("Enter email: "),
        address: {
          street: SafeInput.getString("Enter street: "),
          city: SafeInput.getString("Enter city: "),
          zipCode: SafeInput.getString("Enter zip code: "),
        },
        phone: SafeInput.getString("Enter phone: ", false),
        isActive: SafeInput.getBoolean("Is user active?"),
      };

      console.log("✅ Person object created:");
      console.log(JSON.stringify(person, null, 2));
      console.log("✅ User object created:");
      console.log(JSON.stringify(user, null, 2));

      return { person, user };
    } catch (error) {
      console.error("❌ Error handling object inputs:", error.message);
      return null;
    }
  }

  /**
   * Get validated email input
   * @param {string} message - Prompt message
   * @returns {string} - Valid email
   */
  static getValidEmail(message) {
    let email;
    do {
      email = SafeInput.getString(message);
      if (!InputValidator.isValidEmail(email)) {
        console.log("❌ Please enter a valid email address.");
      }
    } while (!InputValidator.isValidEmail(email));
    return email;
  }

  /**
   * Demonstrates Map input handling
   */
  static handleMapInputs() {
    console.log("\n🗺️ MAP INPUTS");
    console.log("=============");

    try {
      const userMap = new Map();
      const pairs = SafeInput.getNumber("How many key-value pairs: ", true);

      for (let i = 0; i < pairs; i++) {
        const key = SafeInput.getString(`Enter key ${i + 1}: `);
        const value = SafeInput.getString(`Enter value ${i + 1}: `);
        userMap.set(key, value);
      }

      console.log("✅ Map created:");
      console.log(userMap);

      return userMap;
    } catch (error) {
      console.error("❌ Error handling map inputs:", error.message);
      return null;
    }
  }

  /**
   * Demonstrates Set input handling
   */
  static handleSetInputs() {
    console.log("\n🎭 SET INPUTS");
    console.log("=============");

    try {
      const items = SafeInput.getArray(
        "Enter unique items (comma separated): "
      );
      const uniqueItems = new Set(items);

      console.log("✅ Set created:");
      console.log(uniqueItems);
      console.log(
        `✅ Original items: ${items.length}, Unique items: ${uniqueItems.size}`
      );

      return uniqueItems;
    } catch (error) {
      console.error("❌ Error handling set inputs:", error.message);
      return null;
    }
  }

  /**
   * Demonstrates Date input handling
   */
  static handleDateInputs() {
    console.log("\n📅 DATE INPUTS");
    console.log("==============");

    try {
      const birthDate = SafeInput.getDate("Enter your birth date");
      const currentDate = new Date();
      const age = currentDate.getFullYear() - birthDate.getFullYear();

      console.log(`✅ Birth date: ${birthDate.toDateString()}`);
      console.log(`✅ Calculated age: ${age} years`);

      return { birthDate, calculatedAge: age };
    } catch (error) {
      console.error("❌ Error handling date inputs:", error.message);
      return null;
    }
  }

  /**
   * Runs all non-primitive data type demonstrations
   */
  static run() {
    console.log("\n🎯 NON-PRIMITIVE DATA TYPES DEMO");
    console.log("================================");

    const results = {
      arrays: this.handleArrayInputs(),
      objects: this.handleObjectInputs(),
      maps: this.handleMapInputs(),
      sets: this.handleSetInputs(),
      dates: this.handleDateInputs(),
    };

    return results;
  }
}

/**
 * Main Application Controller
 */
class UserInputDemo {
  /**
   * Display welcome message
   */
  static displayWelcome() {
    console.log("🚀 JAVASCRIPT USER INPUT DEMONSTRATION");
    console.log("======================================");
    console.log("This demo showcases various input handling techniques");
    console.log("Press Ctrl+C at any time to exit\n");
  }

  /**
   * Display menu options
   */
  static displayMenu() {
    console.log("\n📋 MENU OPTIONS");
    console.log("===============");
    console.log("1. Primitive Data Types Demo");
    console.log("2. Non-Primitive Data Types Demo");
    console.log("3. Run All Demos");
    console.log("4. Exit");
  }

  /**
   * Handle user menu selection
   */
  static async handleMenuSelection() {
    this.displayMenu();

    const choice = SafeInput.getNumber("Enter your choice (1-4): ", true);

    switch (choice) {
      case 1:
        return PrimitiveDataTypes.run();
      case 2:
        return NonPrimitiveDataTypes.run();
      case 3:
        const primitiveResults = PrimitiveDataTypes.run();
        const nonPrimitiveResults = NonPrimitiveDataTypes.run();
        return {
          primitive: primitiveResults,
          nonPrimitive: nonPrimitiveResults,
        };
      case 4:
        console.log("👋 Thank you for using the demo!");
        process.exit(0);
      default:
        console.log("❌ Invalid choice. Please select 1-4.");
        return this.handleMenuSelection();
    }
  }

  /**
   * Main application entry point
   */
  static run() {
    try {
      this.displayWelcome();

      // Main loop
      const runDemo = () => {
        this.handleMenuSelection()
          .then(() => {
            const continueDemo = SafeInput.getBoolean(
              "\nWould you like to continue?"
            );
            if (continueDemo) {
              runDemo();
            } else {
              console.log("👋 Thank you for using the demo!");
              process.exit(0);
            }
          })
          .catch((error) => {
            console.error("❌ Application error:", error.message);
            process.exit(1);
          });
      };

      runDemo();
    } catch (error) {
      console.error("❌ Fatal error:", error.message);
      process.exit(1);
    }
  }
}

// Export classes for potential module use
module.exports = {
  InputValidator,
  SafeInput,
  PrimitiveDataTypes,
  NonPrimitiveDataTypes,
  UserInputDemo,
};

// Run the application if this file is executed directly
if (require.main === module) {
  UserInputDemo.run();
}
