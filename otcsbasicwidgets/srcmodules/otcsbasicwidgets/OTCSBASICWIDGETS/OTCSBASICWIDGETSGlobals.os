package OTCSBASICWIDGETS

public object OTCSBASICWIDGETSGlobals inherits KERNEL::Globals

	override	List	f__InitObjs = { \
											OTCSBASICWIDGETS::OTCSBASICWIDGETSWebModule, \
											OTCSBASICWIDGETS::CSUIExtension, \
											OTCSBASICWIDGETS::OTCSBASICWIDGETSRequestHandlerGroup \
										}

end
