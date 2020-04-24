package OTCSBASICWIDGETS

public object OTCSBASICWIDGETSWebModule inherits WEBDSP::WebModule

	override	List	fDependencies = { { 'kernel', 16, 0 }, { 'restapi', 16, 0 } }
	override	Boolean	fEnabled = TRUE
	override	String	fModuleName = 'otcsbasicwidgets'
	override	String	fName = 'OTCSBASICWIDGETS'
	override	List	fOSpaces = { 'otcsbasicwidgets' }
	override	String	fSetUpQueryString = 'func=otcsbasicwidgets.configure&module=otcsbasicwidgets&nextUrl=%1'
	override	List	fVersion = { '1', '0', 'r', '0' }

end
