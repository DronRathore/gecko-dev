/* The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Mozilla Communicator client code, released March
 * 31, 1998.
 *
 * The Initial Developer of the Original Code is Netscape Communications
 * Corporation. Portions created by Netscape are
 * Copyright (C) 2000 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s): 
 * Norris Boyd
 * 
 */
    var SECTION = "JavaObject Field or method access";
    var VERSION = "1_4";
    var TITLE   = "LiveConnect 3.0 JavaScript to Java Data Type Conversion " +
                    SECTION;
    startTest();

    var dt = new DT();

    var a = [
		"boolean",
		"byte",
		"integer", 
		"double",
		"float",
		"short",
		"char"
	    ];

    var v = [
		true,
                1,
		2,
		3.0,
                4.0,
                5,
		'a'.charCodeAt(0)
            ];

    for (var i=0; i < a.length; i++) {
            var name = a[i];
            var getterName = "get" + a[i].charAt(0).toUpperCase() + 
                             a[i].substring(1);
            var setterName = "set" + a[i].charAt(0).toUpperCase() + 
                             a[i].substring(1);
	    testcases[testcases.length] = new TestCase(
		 "dt['" + name + "'] == dt." + getterName + "()",
		 dt[name],
		 dt[getterName]() );

            dt[name] = v[i];
	    testcases[testcases.length] = new TestCase(
		 "dt['" + name + "'] = "+ v[i] +"; dt." + getterName + "() == " + v[i],
		 dt[getterName](),
		 v[i]);
    }

    test();

