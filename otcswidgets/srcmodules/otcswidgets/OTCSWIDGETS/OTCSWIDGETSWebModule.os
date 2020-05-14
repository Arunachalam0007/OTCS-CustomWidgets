package OTCSWIDGETS

public object OTCSWIDGETSWebModule inherits WEBDSP::WebModule

	override	List	fDependencies = { { 'kernel', 16, 0 }, { 'restapi', 16, 0 } }
	override	Boolean	fEnabled = TRUE
	override	String	fModuleName = 'otcswidgets'
	override	String	fName = 'OTCSWIDGETS'
	override	List	fOSpaces = { 'otcswidgets' }
	override	String	fSetUpQueryString = 'func=otcswidgets.configure&module=otcswidgets&nextUrl=%1'
	override	List	fVersion = { '1', '0', 'r', '0' }

end
