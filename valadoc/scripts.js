/* markupwriter.vala
 *
 * Copyright (C) 2008-2009 Florian Brosch
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301  USA
 *
 * Author:
 * 	Florian Brosch <flo.brosch@gmail.com>
 */

function get_path (path) {
	var pos = path.lastIndexOf ('/');
	if (pos < 0) {
		return '';
	}

	return path.substring (pos, -1) + '/';
}

function toggle_box (self, id) {
	var element = document.getElementById (id);
	if (element == null) {
		return ;
	}

	if (element.style.display == 'block') {
		element.style.display = 'none';
		self.src = get_path (self.src) + 'coll_open.png';
	} else {
		element.style.display = 'block';
		self.src = get_path (self.src) + 'coll_close.png';
	}
}

// Hiding the inheritance graph if there is no parent or child
function init () {
	var body = document.getElementsByTagName("body")[0];

	if( body == null ) {
		// Recheck each 10 ms just in case the body is not 
		// properly loaded
		setTimeout(init, 10);
	}
	else {
		var diagram = document.getElementsByClassName("main_diagram")[0] ; 
		var box_count = document.getElementsByTagName("area").length ;
		diagram.style.display = box_count < 2 ? 'none' : 'block';
	}

}

if (window.addEventListener) // W3C standard
{
  window.addEventListener('load', init, false); // NB **not** 'onload'
} 
else if (window.attachEvent) // Microsoft
{
  window.attachEvent('onload', init);
}