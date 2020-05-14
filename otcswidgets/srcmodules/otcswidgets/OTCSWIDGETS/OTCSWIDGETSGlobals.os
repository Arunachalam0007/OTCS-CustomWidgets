package OTCSWIDGETS

public object OTCSWIDGETSGlobals inherits KERNEL::Globals

	override	List	f__InitObjs = { \
											OTCSWIDGETS::OTCSWIDGETSWebModule, \
											OTCSWIDGETS::CSUIExtension, \
											OTCSWIDGETS::OTCSWIDGETSRequestHandlerGroup \
										}

end
