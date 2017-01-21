/**
 * author :laiadi adlene
 * description : single web page with alngularjs on coursera : module 01 test solution
 * depends : angular.min.js
 */
(function() {
	'use strict';
	//***********************constants*********************************
	const EMPTY_DATA_MESSAGE = "Please enter data first";
	const SUCCESS_MESSAGE = "Enjoy!";
	const TOO_MATCH_FEADBACK = "Too much!";
	const INFORMATIVE_MESSAGE = "warning empty strings are not considred";
	const BUTTON_CAPTION = "Check If Too Much";

	const SEPARATOR = ",";
	const MAX_ITEMS = 3;

	const RED_TEXT_COLOR = { "color": "red" };
	const GREEN_TEXT_COLOR = { "color": "green" };
	const RED_BORDER = { "border-color": "red" };
	const GREEN_BORDER = { "border-color": "green" };
	//************************constants*********************************
	angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.feadBackMessage = ""; 
		$scope.infoMessage = INFORMATIVE_MESSAGE;
		$scope.itemsString = "";// the model
		$scope.border;
		$scope.textColor;
		$scope.btnText = BUTTON_CAPTION;
		// fired  on button click
		$scope.chekInputAndFeadBackUser = function() {
			var itmesStr = $scope.itemsString;
			if (isIinputValid(itmesStr) == false) {
				return;
			}
			$scope.border = GREEN_BORDER;
			$scope.textColor = GREEN_TEXT_COLOR;
			displayFeadBack(SUCCESS_MESSAGE);

		};
		//*************************************************methodes***********************************
		var displayFeadBack = function(string) {
			$scope.feadBackMessage = string;
		}
		var isIinputValid = function(input) {

			if (input.length == 0) {
				displayFeadBack(EMPTY_DATA_MESSAGE);
				$scope.border = RED_BORDER;
				$scope.textColor = RED_TEXT_COLOR;
				return false;
			}
			var items = getItemsFromInput(input);
			if (items.length > 3) {
				displayFeadBack(TOO_MATCH_FEADBACK);
				$scope.border = GREEN_BORDER;
				$scope.textColor = GREEN_TEXT_COLOR;
				return false;
			}

			return true;
		}
		//returns array of strings
		var getItemsFromInput = function(inp) {
			var inItems = inp.split(SEPARATOR);
			var items = removeEmptyItems(inItems);

			return items;
		}
		var removeEmptyItems = function(stringArray) {
			var j = 0;
			var items = new Array();
			for (var i = 0; i < stringArray.length; i++) {
				var item = stringArray[i].trim();
				if (item.length != 0) {
					items[j] = item;
					j++;
				}

			}
			return items;
		}
		//*************************************************methodes**********************************

	}

})();